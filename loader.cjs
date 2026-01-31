async function loadApp() {
    // This path must match the physical location of your server file
    await import('./dist/binarycraftsystems-web-app/server/server.mjs');
}
loadApp();