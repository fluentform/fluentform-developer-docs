<template>
  <button
    class="ff-theme-toggle"
    type="button"
    :aria-label="ariaLabel"
    :title="ariaLabel"
    @click="toggle"
  >
    <svg v-if="!isDark" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
      <circle cx="12" cy="12" r="4"/>
      <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41"/>
    </svg>
    <svg v-else xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
    </svg>
  </button>
</template>

<script>
export default {
  name: 'ThemeToggle',
  data() {
    return { isDark: false };
  },
  computed: {
    ariaLabel() {
      return this.isDark ? 'Switch to light theme' : 'Switch to dark theme';
    }
  },
  mounted() {
    let stored = null;
    try { stored = localStorage.getItem('ff-docs-theme'); } catch (e) {}
    if (stored === 'dark' || stored === 'light') {
      this.isDark = stored === 'dark';
    } else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      this.isDark = true;
    }
    this.apply();
  },
  methods: {
    toggle() {
      this.isDark = !this.isDark;
      this.apply();
      try { localStorage.setItem('ff-docs-theme', this.isDark ? 'dark' : 'light'); } catch (e) {}
    },
    apply() {
      const root = document.documentElement;
      if (this.isDark) {
        root.classList.add('ff-dark');
      } else {
        root.classList.remove('ff-dark');
      }
    }
  }
};
</script>

<style>
.ff-theme-toggle {
  position: fixed;
  bottom: 20px;
  right: 20px;
  width: 44px;
  height: 44px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  border: 1px solid #e4e7eb;
  background: #ffffff;
  color: #1f2937;
  cursor: pointer;
  z-index: 200;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  transition: background-color 0.15s ease, color 0.15s ease, border-color 0.15s ease, transform 0.15s ease, box-shadow 0.15s ease;
  -webkit-tap-highlight-color: transparent;
}
.ff-theme-toggle:hover {
  background: #f3f4f6;
  transform: scale(1.05);
  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.12);
}
.ff-theme-toggle:focus-visible {
  outline: 2px solid #10b981;
  outline-offset: 2px;
}
.ff-dark .ff-theme-toggle {
  background: #1f2937;
  border-color: #374151;
  color: #f3f4f6;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.4);
}
.ff-dark .ff-theme-toggle:hover {
  background: #374151;
  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.5);
}
@media (max-width: 719px) {
  .ff-theme-toggle {
    bottom: 16px;
    right: 16px;
    width: 40px;
    height: 40px;
  }
}
</style>
