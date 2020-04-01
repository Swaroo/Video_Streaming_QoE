function getBufferLength(player){
    return player.getBufferLength();
}

// function checkStalled(player){
//     return player.buffer_empty();
// }

function getAvailablePlaybackTime(player){
    return player.getBufferLength() + player.time();
}

function getPlaybackTime(player){
    return player.time();
}

function getAverageThroughput(player){
    return player.getAverageThroughput('video');
}

function getVideoQualityIndex(player){
    return player.getQualityFor('video');
}

function getResolution(player, qualityIndex){
    return (player.getBitrateInfoListFor('video')[qualityIndex].width + " X " + player.getBitrateInfoListFor('video')[qualityIndex].height);
}

function getBitrate(player, qualityIndex){
    return (player.getBitrateInfoListFor('video')[qualityIndex].bitrate);
}

function addNewRow(counter){
    var new_row = [];
    new_row = [Math.floor(Date.now() / 1000),counter,
        document.getElementById('duration').value,
        document.getElementById('state').value,
        document.getElementById('buffer').value,
        document.getElementById('playback_time').value,
        document.getElementById('available_playback_time').value,
        document.getElementById('avg_thru').value,
        document.getElementById('quality').value,
        document.getElementById('resolution').value,
        document.getElementById('bitrate').value,
        ];
    return new_row;
}

function download_csv(rows){            

    let csvContent = "data:text/csv;charset=utf-8," 
    + rows.map(e => e.join(",")).join("\n");

    var encodedUri = encodeURI(csvContent);
    var link = document.getElementById('csv_download');
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", "my_data.csv");
    //document.body.appendChild(link); // Required for FF

    //link.click();
        
}