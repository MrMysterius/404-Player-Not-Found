module.exports = (win) => {
    win.webContents.executeJavaScript(`
        (function() {
            function addCss(cssString) {
                var head = document.getElementsByTagName('head')[0];
                var newCss = document.createElement('style');
                newCss.type = 'text/css';
                newCss.innerHTML = cssString;
                head.appendChild(newCss);
            }
            addCss(\`
                html::-webkit-scrollbar {
                width: 0.25rem !important;
                }
                html::-webkit-scrollbar-thumb {
                background-color: #ff5500 !important;
                }
                html::-webkit-scrollbar-track {
                background-color: #1e1e24 !important;
                }
                body {
                background-color: #2b2b2b !important;
                background: #2b2b2b !important;
                color: #cccccc !important;
                }
                .l-container.l-content {
                background-color: #272727 !important;
                }
                .g-tabs, .sc-border-light-bottom, .sc-border-light, .l-listen-wrapper .l-about-rows, .sc-border-light-right, .sc-border-light-left, .sc-border-light-top, .sc-button, .dialog, .dialog__arrow, .searchTitle__text, .selectionModule, textarea, select, input, .queue__panel, .queueFallback__stationMode, .moreActions, .moreActions__button:not(:last-child), .moreActions__link, .g-form-section-head {
                border-color: #333 !important;
                }
                .sc-text, .g-tabs-link:not(.active), .g-tabs-link:visited:not(.active), a.sc-link-dark, textarea, select, button, input {
                color: #cccccc;
                }
                .commentPopover.darkText .commentPopover__body, .sc-buylink, .sc-buylink:visited, a.sc-ministats:hover, .sc-buylink:hover, a.sc-link-light:hover, .playbackTimeline__duration {
                color: #cccccc !important;
                }
                .g-tabs-link:not(.active):hover, .g-tabs-link:focus {
                color: #cccccc;
                border-color: #cccccc;
                }
                .sc-text-light, a.sc-link-light, a.playbackSoundBadge__lightLink:hover, a.playbackSoundBadge__lightLink:focus {
                color: #666;
                }
                .compactTrackListItem:not(.active) .compactTrackListItem__number, .compactTrackListItem:not(.active) .compactTrackListItem__trackTitle {
                color: #666 !important;
                }
                a.sc-link-dark:hover:not(.active), a.sc-link-medium:hover:not(.active), .playbackSoundBadge__titleLink:hover {
                color: #ffffff !important;
                }
                .playControls__inner, .playControls__bg {
                background-color: #2b2b2b !important;
                border-color: #383838 !important;
                }
                .volume__sliderWrapper {
                background-color: #2b2b2b !important;
                }
                .repeatControl.m-none:not(.sc-button-active):not(.sc-button-selected), .playControls__elements .skipControl:not(.sc-button-active):not(.sc-button-selected), .playControls__elements .playControl:not(.sc-button-active):not(.sc-button-selected), .shuffleControl:not(.m-shuffling):not(.sc-button-active):not(.sc-button-selected), .playControls__castControl:not(.sc-button-active):not(.sc-button-selected), .volume__button:not(.sc-button-active):not(.sc-button-selected), .playbackSoundBadge__showQueue:not(.sc-button-active):not(.sc-button-selected), .sc-button-medium:not(.sc-button-active):not(.sc-button-selected):not(.sc-button-nostyle):before, .sc-button-icon:not(.sc-button-active):not(.sc-button-selected):not(.sc-button-nostyle):before, .tileGallery__sliderPeek:not(:hover) .sc-button-icon:not(:hover):not(.sc-button-active):not(.sc-button-selected):after, .sound__soundActions .sc-button-small:not(.sc-button-active):not(.sc-button-selected):before, .searchOptions__navigationItem:not(.active), .sc-ministats-small.sc-ministats-sounds:before, .queue__hide:focus, .queue__hide:hover, .queue__hide, .queueItemView__more.sc-button-small.sc-button-more:before, .hintButton {
                filter: invert(0.91);
                }
                .m-queueVisible .playbackSoundBadge__showQueue, .accountSocialConnect__buttons .sc-button:before {
                filter: invert(0) !important;
                }
                .playbackSoundBadge__titleLink, .playbackSoundBadge__titleLink:visited {
                color: #b7b7b7;
                }
                .backgroundGradient {
                filter: brightness(0.8);
                }
                .listenEngagement {
                border-color: transparent !important;
                box-shadow: 0 1px 0 0 #333 !important;
                }
                .sc-button:not(.sc-button-nostyle):not(.sc-button-play), .dialog, .dialog__arrow, textarea, select, input, .queue, .queue__itemWrapper {
                background-color: #272727;
                }
                .sound__soundActions, .searchTitle, .listenContent__inner, .moreActions__button, .moreActions__link, .moreActions {
                background-color: #272727 !important;
                }
                .playbackSoundBadge__actions .sc-button, .hintButton {
                background-color: transparent !important;
                }
                .moreActions__button:hover, .moreActions__link:hover, .moreActions__button:focus {
                background-color: #313131 !important;
                }
                .sc-button-play, .sc-button-pause, .sc-button-prev, .sc-button-next, .sc-button.sc-button-blocked, .sc-button.sc-button-play:disabled, .sc-button.sc-button-play:disabled:hover, .sc-button.sc-button-play.sc-button-disabled:disabled {
                background-color: #f50;
                }
                .sc-button:not(.sc-button-selected) {
                color: #cccccc;
                }
                .truncatedAudioInfo.m-overflow.m-collapsed .truncatedAudioInfo__wrapper::after {
                background: #272727 !important;
                background: linear-gradient(rgba(0, 0, 0, 0),rgba(53, 53, 53, 0.5)90%,#272727) !important;
                }
                .soundBadge__additional {
                background: #272727 !important;
                background: linear-gradient(to right,rgba(39, 39, 39, 0.1),#272727 17px) !important;
                }
                .compactTrackListItem.clickToPlay.active .compactTrackListItem__additional, .compactTrackListItem.clickToPlay:hover .compactTrackListItem__additional, .compactTrackListItem.clickToPlay:focus .compactTrackListItem__additional, .trackItem:not(.m-disabled).hover .trackItem__additional, .trackItem:not(.m-disabled).active .trackItem__additional {
                background: #313131 !important;
                background: linear-gradient(to right,rgba(49, 49, 49, 0.1),#313131 17px) !important;
                }
                .paging-eof:before {
                filter: invert(0.846);
                }
                .image__lightOutline .image__full {
                box-shadow: rgba(255,255,255,.1)0 0 0 1px inset;
                }
                .compactTrackListItem.clickToPlay.active, .compactTrackListItem.clickToPlay:hover, .compactTrackListItem.clickToPlay:focus, .commentForm__wrapper, .trackItem.hover, .trackItem.active, .dropbar__content, .sidebarInfoBox, .queueItemView:hover.m-active, .queueItemView:hover, .queueItemView.m-active {
                background-color: #313131 !important;
                border-color: #313131 !important;
                }
                .commentForm__input {
                background-color: #272727 !important;
                border-color: #272727 !important;
                color: #cccccc !important;
                }
                .g-dark textarea, .g-dark select, .g-dark input[type='text'], .g-dark input[type='password'], .g-dark input[type='search'], .g-dark input[type='search']:focus {
                background: #464646;
                color: #cccccc !important;
                }
            \`);
        })();
    `);

    win.webContents.executeJavaScript(`
        setInterval(()=>{
            let logo = document.getElementsByClassName('header__logoLink header__logoLink-iconOnly sc-border-box sc-ir')[0];
            logo.href = 'javascript:history.back()';
            let artist = document.getElementsByClassName('playbackSoundBadge__lightLink sc-link-light sc-truncate')[0].innerHTML;
            let track = document.getElementsByClassName('playbackSoundBadge__titleLink sc-truncate')[0].getAttribute('title');
            let pageTitle = document.getElementsByTagName('title')[0];
            let playing = document.getElementsByClassName('playControl sc-ir playControls__control playControls__play')[0].classList.contains('playing');
            let mediaTrack = new MediaMetadata;
            mediaTrack.title = track;
            mediaTrack.artist = artist;
            mediaTrack.artwork = [{"sizes":"200x200","src":document.getElementsByClassName('playbackSoundBadge__avatar sc-media-image')[0].children[0].children[0].style.backgroundImage.replace('url(\"','').replace('\")','').replace('50x50.jpg','200x200.jpg').toString(),"type":"image/jpg"}];
            if (navigator.mediaSession.playbackState == "playing") {
                navigator.mediaSession.metadata = mediaTrack;
            }
            if (artist && track && playing) {
                pageTitle.innerHTML = track + ' - ' + artist;
            }
        },100);
    `)
}