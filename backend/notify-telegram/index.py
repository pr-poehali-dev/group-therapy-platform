import json
import os
import base64
import urllib.request
import urllib.parse


def handler(event: dict, context) -> dict:
    """Отправляет заявку с сайта в Telegram."""
    if event.get('httpMethod') == 'OPTIONS':
        return {
            'statusCode': 200,
            'headers': {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'POST, OPTIONS',
                'Access-Control-Allow-Headers': 'Content-Type',
                'Access-Control-Max-Age': '86400',
            },
            'body': ''
        }

    raw = event.get('body') or '{}'
    if event.get('isBase64Encoded'):
        raw = base64.b64decode(raw).decode('utf-8')
    body = json.loads(raw)

    name = body.get('name', '—')
    contact = body.get('contact', '—')
    topic = body.get('topic', '—')
    contact_method = body.get('contactMethod', '—')
    comment = body.get('comment', '')

    contact_method_labels = {
        'telegram': 'Telegram',
        'phone': 'Звонок',
        'max': 'Не срочно',
    }
    contact_method_display = contact_method_labels.get(contact_method, contact_method)

    text = (
        f"📩 *Новая заявка с сайта*\n\n"
        f"👤 *Имя:* {name}\n"
        f"📞 *Контакт:* {contact}\n"
        f"🎯 *Тема:* {topic}\n"
        f"💬 *Способ связи:* {contact_method_display}\n"
    )
    if comment:
        text += f"📝 *Комментарий:* {comment}\n"

    bot_token = os.environ['TELEGRAM_BOT_TOKEN']
    chat_id = 397917951

    data = urllib.parse.urlencode({
        'chat_id': chat_id,
        'text': text,
        'parse_mode': 'Markdown',
    }).encode()

    req = urllib.request.Request(
        f'https://api.telegram.org/bot{bot_token}/sendMessage',
        data=data,
        method='POST'
    )
    with urllib.request.urlopen(req) as resp:
        result = json.loads(resp.read())

    return {
        'statusCode': 200,
        'headers': {'Access-Control-Allow-Origin': '*'},
        'body': json.dumps({'ok': True, 'telegram': result.get('ok')})
    }