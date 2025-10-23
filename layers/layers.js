var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '&nbsp;&middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_OCUPAESAP4_1 = new ol.format.GeoJSON();
var features_OCUPAESAP4_1 = format_OCUPAESAP4_1.readFeatures(json_OCUPAESAP4_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_OCUPAESAP4_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_OCUPAESAP4_1.addFeatures(features_OCUPAESAP4_1);
var lyr_OCUPAESAP4_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_OCUPAESAP4_1, 
                style: style_OCUPAESAP4_1,
                popuplayertitle: 'OCUPAÇÕES AP4',
                interactive: true,
                title: '<img src="styles/legend/OCUPAESAP4_1.png" /> OCUPAÇÕES AP4'
            });
var format_Limite_reas_de_Planejamento_AP_2 = new ol.format.GeoJSON();
var features_Limite_reas_de_Planejamento_AP_2 = format_Limite_reas_de_Planejamento_AP_2.readFeatures(json_Limite_reas_de_Planejamento_AP_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Limite_reas_de_Planejamento_AP_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Limite_reas_de_Planejamento_AP_2.addFeatures(features_Limite_reas_de_Planejamento_AP_2);
var lyr_Limite_reas_de_Planejamento_AP_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Limite_reas_de_Planejamento_AP_2, 
                style: style_Limite_reas_de_Planejamento_AP_2,
                popuplayertitle: 'Limite_Áreas_de_Planejamento_(AP)',
                interactive: true,
                title: 'Limite_Áreas_de_Planejamento_(AP)'
            });

lyr_GoogleSatellite_0.setVisible(true);lyr_OCUPAESAP4_1.setVisible(true);lyr_Limite_reas_de_Planejamento_AP_2.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_OCUPAESAP4_1,lyr_Limite_reas_de_Planejamento_AP_2];
lyr_OCUPAESAP4_1.set('fieldAliases', {'id': 'id', });
lyr_Limite_reas_de_Planejamento_AP_2.set('fieldAliases', {'objectid_1': 'objectid_1', 'codap': 'codap', 'codapnum': 'codapnum', 'st_areasha': 'st_areasha', 'st_perimet': 'st_perimet', });
lyr_OCUPAESAP4_1.set('fieldImages', {'id': 'TextEdit', });
lyr_Limite_reas_de_Planejamento_AP_2.set('fieldImages', {'objectid_1': 'Range', 'codap': 'TextEdit', 'codapnum': 'Range', 'st_areasha': 'TextEdit', 'st_perimet': 'TextEdit', });
lyr_OCUPAESAP4_1.set('fieldLabels', {'id': 'no label', });
lyr_Limite_reas_de_Planejamento_AP_2.set('fieldLabels', {'objectid_1': 'no label', 'codap': 'no label', 'codapnum': 'no label', 'st_areasha': 'no label', 'st_perimet': 'no label', });
lyr_Limite_reas_de_Planejamento_AP_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});