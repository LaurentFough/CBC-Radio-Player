// Copyright 2012 Colm Ryan colm@colmryan.org
// License GPL v3 (http://www.gnu.org/licenses/gpl.txt) 

Ext.define('CBCRadioPlayer.model.Favourite', {
    extend: 'Ext.data.Model',
    config: {
        fields: ['displayName', 'isLive', 'audioURLs', 'cityName', 'title', 'RSSFeed', 'imgLink' ]
    }
});
