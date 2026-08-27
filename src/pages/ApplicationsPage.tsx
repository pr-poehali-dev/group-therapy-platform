import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Icon from "@/components/ui/icon";

type Application = {
  id: number;
  name: string;
  contact: string;
  topic: string;
  direction: string;
  psychologist: string;
  contactMethod: string;
  comment: string;
  createdAt: string;
};

const CONTACT_METHOD_LABELS: Record<string, string> = {
  telegram: "Telegram",
  phone: "Звонок",
  max: "Не срочно",
};

export default function ApplicationsPage() {
  const [password, setPassword] = useState("");
  const [authorized, setAuthorized] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [applications, setApplications] = useState<Application[]>([]);

  const fetchApplications = async (pwd: string) => {
    setLoading(true);
    setError("");
    try {
      const res = await fetch("https://functions.poehali.dev/d62b24a3-8e87-4210-bd46-21bc5792a72a", {
        headers: { "X-Admin-Password": pwd },
      });
      if (res.status === 401) {
        setError("Неверный пароль");
        setLoading(false);
        return;
      }
      const data = await res.json();
      setApplications(data.applications || []);
      setAuthorized(true);
      sessionStorage.setItem("admin_password", pwd);
    } catch {
      setError("Не удалось загрузить заявки");
    }
    setLoading(false);
  };

  useEffect(() => {
    const saved = sessionStorage.getItem("admin_password");
    if (saved) {
      setPassword(saved);
      fetchApplications(saved);
    }
  }, []);

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    fetchApplications(password);
  };

  const formatDate = (iso: string) => {
    const d = new Date(iso);
    return d.toLocaleString("ru-RU", { day: "2-digit", month: "2-digit", year: "numeric", hour: "2-digit", minute: "2-digit" });
  };

  if (!authorized) {
    return (
      <div className="min-h-screen flex items-center justify-center font-body" style={{ backgroundColor: "var(--cream)" }}>
        <div className="w-full max-w-sm px-6">
          <div className="text-center mb-8">
            <span className="font-display text-2xl font-semibold" style={{ color: "var(--olive)" }}>Вместе</span>
            <p className="font-body text-sm mt-2" style={{ color: "var(--text-muted)" }}>Вход в заявки</p>
          </div>
          <form onSubmit={onSubmit} className="rounded-3xl p-8 space-y-4" style={{ backgroundColor: "var(--beige)" }}>
            <input
              type="password"
              required
              autoFocus
              placeholder="Введите пароль"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full rounded-xl px-4 py-3 font-body text-sm outline-none"
              style={{ backgroundColor: "var(--cream)", border: "1px solid var(--beige-dark)", color: "var(--text-main)" }}
            />
            {error && <p className="font-body text-xs" style={{ color: "var(--olive)" }}>{error}</p>}
            <button type="submit" disabled={loading} className="btn-primary w-full justify-center text-base py-3">
              {loading ? "Проверка..." : "Войти"}
            </button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen font-body py-10" style={{ backgroundColor: "var(--cream)" }}>
      <div className="max-w-5xl mx-auto px-6">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="font-display text-3xl font-light" style={{ color: "var(--text-main)" }}>Заявки</h1>
            <p className="font-body text-sm mt-1" style={{ color: "var(--text-muted)" }}>Всего: {applications.length}</p>
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={() => fetchApplications(password)}
              className="flex items-center gap-2 font-body text-sm px-4 py-2 rounded-xl transition-opacity hover:opacity-70"
              style={{ backgroundColor: "var(--beige)", color: "var(--text-main)" }}
            >
              <Icon name="RefreshCw" size={16} />
              Обновить
            </button>
            <Link to="/" className="font-body text-sm underline underline-offset-2" style={{ color: "var(--text-muted)" }}>
              На сайт
            </Link>
          </div>
        </div>

        {applications.length === 0 ? (
          <div className="text-center py-20 rounded-3xl" style={{ backgroundColor: "var(--beige)" }}>
            <p className="font-body" style={{ color: "var(--text-muted)" }}>Заявок пока нет</p>
          </div>
        ) : (
          <div className="space-y-4">
            {applications.map((app) => (
              <div key={app.id} className="rounded-2xl p-6" style={{ backgroundColor: "var(--beige)" }}>
                <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
                  <div>
                    <span className="font-display text-lg font-medium" style={{ color: "var(--text-main)" }}>{app.name}</span>
                    <span className="font-body text-sm ml-3" style={{ color: "var(--text-muted)" }}>{app.contact}</span>
                  </div>
                  <span className="font-body text-xs" style={{ color: "var(--text-muted)" }}>{formatDate(app.createdAt)}</span>
                </div>
                <div className="flex flex-wrap gap-2 mb-3">
                  {app.contactMethod && (
                    <span className="font-body text-xs px-3 py-1 rounded-full" style={{ backgroundColor: "var(--cream)", color: "var(--olive)" }}>
                      {CONTACT_METHOD_LABELS[app.contactMethod] || app.contactMethod}
                    </span>
                  )}
                  {app.direction && (
                    <span className="font-body text-xs px-3 py-1 rounded-full" style={{ backgroundColor: "var(--cream)", color: "var(--text-muted)" }}>
                      {app.direction}
                    </span>
                  )}
                  {app.psychologist && (
                    <span className="font-body text-xs px-3 py-1 rounded-full" style={{ backgroundColor: "var(--cream)", color: "var(--text-muted)" }}>
                      {app.psychologist}
                    </span>
                  )}
                </div>
                {app.topic && (
                  <p className="font-body text-sm mb-1" style={{ color: "var(--text-main)" }}>
                    <span style={{ color: "var(--text-muted)" }}>Тема: </span>{app.topic}
                  </p>
                )}
                {app.comment && (
                  <p className="font-body text-sm" style={{ color: "var(--text-main)" }}>
                    <span style={{ color: "var(--text-muted)" }}>Комментарий: </span>{app.comment}
                  </p>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
