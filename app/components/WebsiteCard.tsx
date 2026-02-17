import Image from "next/image";

interface WebsiteContent {
  url: string;
  title: string;
  body: string;
  ctaText?: string;
  footer?: string;
  isSecure: boolean;
}

export default function WebsiteCard({
  site,
}: {
  site: WebsiteContent;
}) {
  return (
    <div className="bg-zinc-200 p-6 rounded-xl shadow-inner h-full w-3/5 ml-12">
      
      {/* Browser window */}
      <div className="bg-white h-full rounded-lg shadow-md border overflow-hidden">

        {/* Browser top bar */}
        <div className="flex items-center gap-3 px-4 py-2 border-b bg-zinc-100">
          <div className="flex gap-2">
            <span className="w-3 h-3 rounded-full bg-red-400" />
            <span className="w-3 h-3 rounded-full bg-yellow-400" />
            <span className="w-3 h-3 rounded-full bg-green-400" />
          </div>

          {/* Address bar */}
          <div className="flex items-center gap-2 bg-white border rounded-md px-3 py-1 ml-4 flex-1 text-sm">
            <span>
              {site.isSecure ? "🔒" : "⚠️"}
            </span>
            <span className="text-zinc-700 font-sans truncate">
              {site.url}
            </span>
          </div>
        </div>

        {/* Page content */}
        <div className="px-8 py-10 space-y-8">
          <h1 className="text-3xl font-sans font-bold text-zinc-900">
            {site.title}
          </h1>

          <p className="text-zinc-800 font-sans leading-relaxed whitespace-pre-wrap">
            {site.body}
          </p>

          {site.ctaText && (
            <button
              className="font-sans mt-6 px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white rounded-md font-semibold shadow-md cursor-default"
            >
              {site.ctaText}
            </button>
          )}
        </div>

        {/* Footer */}
        {site.footer && (
          <div className="font-sans border-t px-6 py-4 text-sm text-zinc-500">
            {site.footer}
          </div>
        )}
      </div>
    </div>
  );
}
