/**
 * Client app enhancement file.
 *
 * https://v1.vuepress.vuejs.org/guide/basic-config.html#app-level-enhancements
 */

export default ({
  Vue, // the version of Vue being used in the VuePress app
  options, // the options for the root Vue instance
  router, // the router instance for the app
  siteData // site metadata
}) => {
  if (typeof window === 'undefined') return;

  // Apply theme as early as possible to avoid a flash of light theme.
  try {
    const stored = localStorage.getItem('ff-docs-theme');
    const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    if (stored === 'dark' || (!stored && prefersDark)) {
      document.documentElement.classList.add('ff-dark');
    }
  } catch (e) {}

  // Mount the floating ThemeToggle once the router is ready.
  router.onReady(() => {
    if (document.getElementById('ff-theme-toggle-mount')) return;
    const mount = document.createElement('div');
    mount.id = 'ff-theme-toggle-mount';
    document.body.appendChild(mount);

    // ThemeToggle is auto-registered by @vuepress/plugin-register-components
    // because it lives at src/.vuepress/components/ThemeToggle.vue.
    new Vue({
      el: mount,
      render(h) {
        return h('theme-toggle');
      }
    });
  });
};
