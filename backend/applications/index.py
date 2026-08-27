import json
import os
import base64
import psycopg2

CORS_HEADERS = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type, X-Admin-Password',
    'Access-Control-Max-Age': '86400',
}


def handler(event: dict, context) -> dict:
    """Сохраняет заявки с сайта в БД и отдаёт их список для админ-страницы."""
    method = event.get('httpMethod')

    if method == 'OPTIONS':
        return {'statusCode': 200, 'headers': CORS_HEADERS, 'body': ''}

    dsn = os.environ['DATABASE_URL']

    if method == 'POST':
        raw = event.get('body') or '{}'
        if event.get('isBase64Encoded'):
            raw = base64.b64decode(raw).decode('utf-8')
        body = json.loads(raw)

        name = body.get('name', '')
        contact = body.get('contact', '')
        topic = body.get('topic', '')
        direction = body.get('direction', '')
        psychologist = body.get('psychologist', '')
        contact_method = body.get('contactMethod', '')
        comment = body.get('comment', '')

        conn = psycopg2.connect(dsn)
        try:
            cur = conn.cursor()
            cur.execute(
                "INSERT INTO applications (name, contact, topic, direction, psychologist, contact_method, comment) "
                "VALUES (%s, %s, %s, %s, %s, %s, %s)",
                (name, contact, topic, direction, psychologist, contact_method, comment)
            )
            conn.commit()
            cur.close()
        finally:
            conn.close()

        return {
            'statusCode': 200,
            'headers': CORS_HEADERS,
            'body': json.dumps({'ok': True})
        }

    if method == 'GET':
        headers = event.get('headers') or {}
        provided_password = headers.get('X-Admin-Password') or headers.get('x-admin-password')
        admin_password = os.environ.get('ADMIN_PASSWORD')

        if not provided_password or provided_password != admin_password:
            return {
                'statusCode': 401,
                'headers': CORS_HEADERS,
                'body': json.dumps({'error': 'Неверный пароль'})
            }

        conn = psycopg2.connect(dsn)
        try:
            cur = conn.cursor()
            cur.execute(
                "SELECT id, name, contact, topic, direction, psychologist, contact_method, comment, created_at "
                "FROM applications ORDER BY created_at DESC"
            )
            rows = cur.fetchall()
            cur.close()
        finally:
            conn.close()

        applications = [
            {
                'id': r[0],
                'name': r[1],
                'contact': r[2],
                'topic': r[3],
                'direction': r[4],
                'psychologist': r[5],
                'contactMethod': r[6],
                'comment': r[7],
                'createdAt': r[8].isoformat() if r[8] else None,
            }
            for r in rows
        ]

        return {
            'statusCode': 200,
            'headers': CORS_HEADERS,
            'body': json.dumps({'applications': applications})
        }

    return {
        'statusCode': 405,
        'headers': CORS_HEADERS,
        'body': json.dumps({'error': 'Method not allowed'})
    }
