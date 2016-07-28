function dangerouslyRenderShortcut(modifierKeys, key, description) {
    /* Beware XSS! Don't pass HTML strings into this function. */
    return (
    '<div class="row">' +
    '    <div class="keystroke ' + modifierKeys + '">' +
    '        <span class="key-images">' +
    '            <span class="shift-image"></span><br/>' +
    '            <span class="ctrl-image"></span>' +
    '            <span class="alt-image"></span>' +
    '            <span class="cmd-image"></span>' +
    '        </span>' +
    '        + ' + key +
    '    </div>' +
    '    <div class="description">' +
    description +
    '    </div>' +
    '</div>')
}

var shortcutElements = document.querySelectorAll('[data-key]');

for (var i = 0; i < shortcutElements.length; i++) {
    var shortcut = shortcutElements[i];
    shortcut.innerHTML = dangerouslyRenderShortcut(
        shortcut.getAttribute('data-modifiers'),
        shortcut.getAttribute('data-key'),
        shortcut.getAttribute('data-description')
    )
}