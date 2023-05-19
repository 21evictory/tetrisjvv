input.onGesture(Gesture.Shake, function () {
    for (let index = 0; index < 1; index++) {
        music.playTone(698, music.beat(BeatFraction.Whole))
        music.playTone(523, music.beat(BeatFraction.Half))
        music.playTone(554, music.beat(BeatFraction.Half))
        music.playTone(622, music.beat(BeatFraction.Whole))
        music.playTone(554, music.beat(BeatFraction.Half))
        music.playTone(523, music.beat(BeatFraction.Half))
        music.playTone(466, music.beat(BeatFraction.Whole))
        music.playTone(466, music.beat(BeatFraction.Half))
        music.playTone(554, music.beat(BeatFraction.Half))
    }
})
