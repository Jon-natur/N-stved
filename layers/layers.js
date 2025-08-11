var wms_layers = [];


        var lyr_GoogleSatelithybrid_0 = new ol.layer.Tile({
            'title': 'Google Satelit hybrid',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });
var lyr_Fredskov_1 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://services.datafordeler.dk/MATRIKLEN2/MatGaeldendeOgForeloebigWMS/1.0.0/WMS?username%3DUFZLDDPIJS%26password%3DDAIdatafordel123",
                              attributions: ' ',
                              params: {
                                "LAYERS": "FredskovFlade_Gaeldende",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: 'Fredskov',
                            popuplayertitle: 'Fredskov',
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_Fredskov_1, 0]);
var format_Pot_3_2025_2 = new ol.format.GeoJSON();
var features_Pot_3_2025_2 = format_Pot_3_2025_2.readFeatures(json_Pot_3_2025_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Pot_3_2025_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Pot_3_2025_2.addFeatures(features_Pot_3_2025_2);
var lyr_Pot_3_2025_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Pot_3_2025_2, 
                style: style_Pot_3_2025_2,
                popuplayertitle: 'Pot_§3_2025',
                interactive: true,
                title: '<img src="styles/legend/Pot_3_2025_2.png" /> Pot_§3_2025'
            });
var format_3_omrder_2025_3 = new ol.format.GeoJSON();
var features_3_omrder_2025_3 = format_3_omrder_2025_3.readFeatures(json_3_omrder_2025_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_3_omrder_2025_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_3_omrder_2025_3.addFeatures(features_3_omrder_2025_3);
var lyr_3_omrder_2025_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_3_omrder_2025_3, 
                style: style_3_omrder_2025_3,
                popuplayertitle: '§3_områder_2025',
                interactive: true,
    title: '§3_områder_2025<br />\
    <img src="styles/legend/3_omrder_2025_3_0.png" /> Eng<br />\
    <img src="styles/legend/3_omrder_2025_3_1.png" /> Sø<br />\
    <img src="styles/legend/3_omrder_2025_3_2.png" /> Mose<br />\
    <img src="styles/legend/3_omrder_2025_3_3.png" /> Overdrev<br />\
    <img src="styles/legend/3_omrder_2025_3_4.png" /> <br />' });
var lyr_Beskyttedevandlb_4 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://arealeditering-dist-geo.miljoeportal.dk/geoserver/wms",
                              attributions: ' ',
                              params: {
                                "LAYERS": "dai:bes_vandloeb",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: 'Beskyttede vandløb',
                            popuplayertitle: 'Beskyttede vandløb',
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_Beskyttedevandlb_4, 0]);
var group_Baggrundskort = new ol.layer.Group({
                                layers: [],
                                fold: 'open',
                                title: 'Baggrundskort'});

lyr_GoogleSatelithybrid_0.setVisible(true);lyr_Fredskov_1.setVisible(true);lyr_Pot_3_2025_2.setVisible(true);lyr_3_omrder_2025_3.setVisible(true);lyr_Beskyttedevandlb_4.setVisible(true);
var layersList = [lyr_GoogleSatelithybrid_0,lyr_Fredskov_1,lyr_Pot_3_2025_2,lyr_3_omrder_2025_3,lyr_Beskyttedevandlb_4];
lyr_Pot_3_2025_2.set('fieldAliases', {'id': 'id', 'Bemærk': 'Bemærk', 'N360-ID': 'N360-ID', });
lyr_3_omrder_2025_3.set('fieldAliases', {'Temakode': 'Temakode', 'Temanavn': 'Temanavn', 'Objekt_id': 'Objekt_id', 'Version_id': 'Version_id', 'Systid_fra': 'Systid_fra', 'Systid_til': 'Systid_til', 'Oprettet': 'Oprettet', 'Oprindkode': 'Oprindkode', 'Oprindelse': 'Oprindelse', 'Statuskode': 'Statuskode', 'Status': 'Status', 'Off_kode': 'Off_kode', 'Offentlig': 'Offentlig', 'CVR_kode': 'CVR_kode', 'CVR_navn': 'CVR_navn', 'Bruger_id': 'Bruger_id', 'Link': 'Link', 'Shape_area': 'Shape_area', 'Shape_leng': 'Shape_leng', 'Natyp_kode': 'Natyp_kode', 'Natyp_navn': 'Natyp_navn', 'Aendr_kode': 'Aendr_kode', 'Aendrbegr': 'Aendrbegr', 'Sagsbeh': 'Sagsbeh', 'Gl_sys_ref': 'Gl_sys_ref', 'Besig_dato': 'Besig_dato', 'Journalnr': 'Journalnr', 'Vedligehol': 'Vedligehol', 'Vedligeh_1': 'Vedligeh_1', 'N360-ID': 'N360-ID', });
lyr_Pot_3_2025_2.set('fieldImages', {'id': 'TextEdit', 'Bemærk': 'TextEdit', 'N360-ID': 'TextEdit', });
lyr_3_omrder_2025_3.set('fieldImages', {'Temakode': 'TextEdit', 'Temanavn': 'TextEdit', 'Objekt_id': 'TextEdit', 'Version_id': 'TextEdit', 'Systid_fra': 'TextEdit', 'Systid_til': 'TextEdit', 'Oprettet': 'TextEdit', 'Oprindkode': 'TextEdit', 'Oprindelse': 'TextEdit', 'Statuskode': 'TextEdit', 'Status': 'TextEdit', 'Off_kode': 'TextEdit', 'Offentlig': 'TextEdit', 'CVR_kode': 'TextEdit', 'CVR_navn': 'TextEdit', 'Bruger_id': 'TextEdit', 'Link': 'TextEdit', 'Shape_area': 'TextEdit', 'Shape_leng': 'TextEdit', 'Natyp_kode': 'TextEdit', 'Natyp_navn': 'TextEdit', 'Aendr_kode': 'TextEdit', 'Aendrbegr': 'TextEdit', 'Sagsbeh': 'TextEdit', 'Gl_sys_ref': 'TextEdit', 'Besig_dato': 'TextEdit', 'Journalnr': 'TextEdit', 'Vedligehol': 'TextEdit', 'Vedligeh_1': 'TextEdit', 'N360-ID': 'Range', });
lyr_Pot_3_2025_2.set('fieldLabels', {'id': 'inline label - always visible', 'Bemærk': 'inline label - always visible', 'N360-ID': 'inline label - always visible', });
lyr_3_omrder_2025_3.set('fieldLabels', {'Temakode': 'no label', 'Temanavn': 'inline label - always visible', 'Objekt_id': 'no label', 'Version_id': 'no label', 'Systid_fra': 'no label', 'Systid_til': 'no label', 'Oprettet': 'inline label - always visible', 'Oprindkode': 'no label', 'Oprindelse': 'no label', 'Statuskode': 'no label', 'Status': 'inline label - always visible', 'Off_kode': 'no label', 'Offentlig': 'no label', 'CVR_kode': 'no label', 'CVR_navn': 'no label', 'Bruger_id': 'no label', 'Link': 'no label', 'Shape_area': 'inline label - always visible', 'Shape_leng': 'no label', 'Natyp_kode': 'no label', 'Natyp_navn': 'inline label - always visible', 'Aendr_kode': 'no label', 'Aendrbegr': 'inline label - always visible', 'Sagsbeh': 'inline label - always visible', 'Gl_sys_ref': 'no label', 'Besig_dato': 'inline label - always visible', 'Journalnr': 'inline label - always visible', 'Vedligehol': 'no label', 'Vedligeh_1': 'no label', 'N360-ID': 'inline label - always visible', });
lyr_3_omrder_2025_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});