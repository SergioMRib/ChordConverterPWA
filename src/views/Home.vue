<template>
    <div>
        <div class="description">
            <h2>Welcome to the Chord Converter</h2>
            <p>This is an interactive, simple and straightforward chord converter where you can select your own chords and convert them to your needs.</p>
            <p>To be this simple I took the liberty of not looking to be theoretically correct.</p>
            <p>To use this tool go to "The Converter" on top.</p>
        </div>

        <div class="instructions">
            <h2>Instructions</h2>
            <p>On the "The Converter" tab you should:</p>
            <ul>
                <li>Choose the chord system you prefer before starting;</li>
                <li>Add one by one the chords of your song by clicking/tapping listed at the bottom of screen;</li>
                <li>Select a chord of your list by clicking/tapping on them;</li>
                <li>Tap the modifiers (m, 7, M...) to add them to the selected chord;</li>
                <li>Use the buttons on the bottom right to convert a half step up or down, remove the selected chord or clear the entire list.</li>
            </ul>
        </div>
    </div>
</template>

<style scoped>
    .description, .instructions {
        margin: 0 10px;
    }
    p, ul {
        text-align: left;
    }
</style>