'use client'

import { useEffect } from 'react'

declare global {
    interface Window {
        posthog: any
    }
}

export default function PostHogProvider() {
    useEffect(() => {
        // Only run on client side
        if (typeof window === 'undefined') return

        const posthogKey = process.env.NEXT_PUBLIC_POSTHOG_KEY || 'phc_Dr4HuSTh5ssM6Gw0Shm5Vh3h0QFyMc0dI7omWNXdghW'
        const posthogHost = process.env.NEXT_PUBLIC_POSTHOG_HOST || 'https://eu.i.posthog.com'

        // Load PostHog script if not already loaded
        if (!window.posthog) {
            const script = document.createElement('script')
            script.innerHTML = `
                !function (t, e) {
                    var o, n, p, r;
                    e.__SV || (window.posthog && window.posthog.__loaded) || (
                        window.posthog = e,
                        e._i = [],
                        e.init = function (i, s, a) {
                            function g(t, e) {
                                var o = e.split(".");
                                2 == o.length && (t = t[o[0]], e = o[1]),
                                t[e] = function () {
                                    t.push([e].concat(Array.prototype.slice.call(arguments, 0)))
                                }
                            }
                            (p = t.createElement("script")).type = "text/javascript",
                            p.crossOrigin = "anonymous",
                            p.async = !0,
                            p.src = s.api_host.replace(".i.posthog.com", "-assets.i.posthog.com") + "/static/array.js",
                            (r = t.getElementsByTagName("script")[0]).parentNode.insertBefore(p, r);
                            var u = e;
                            for (void 0 !== a ? u = e[a] = [] : a = "posthog",
                                u.people = u.people || [],
                                u.toString = function (t) {
                                    var e = "posthog";
                                    return "posthog" !== a && (e += "." + a),
                                    t || (e += " (stub)"),
                                    e
                                },
                                u.people.toString = function () {
                                    return u.toString(1) + ".people (stub)"
                                },
                                o = "init Fe Us zs Oe js Ns capture Ze calculateEventProperties Hs register register_once register_for_session unregister".split(" "),
                                n = 0; n < o.length; n++)
                                g(u, o[n]);
                            e._i.push([i, s, a])
                        },
                        e.__SV = 1
                    )
                }(document, window.posthog || []);
                posthog.init('${posthogKey}', {
                    api_host: '${posthogHost}',
                });
            `
            document.head.appendChild(script)
        }
    }, [])

    return null
}
