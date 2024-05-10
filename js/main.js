var player;

        function onYouTubeIframeAPIReady() {
            player = new YT.Player('player', {
                videoId: 'https://www.youtube.com/watch?v=rJabgOChWiM&list=RDrJabgOChWiM&start_radio=1',
                playerVars: {
                    'autoplay': 1,
                    'controls': 1,
                    'rel': 0,
                    'showinfo': 0
                },
                events: {
                    'onReady': onPlayerReady
                }
            });
            // 
           
        }

        function onPlayerReady(event) {
            event.target.playVideo();
        }

        //
        