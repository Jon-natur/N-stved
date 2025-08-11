var size = 0;
var placement = 'point';
function categories_3_omrder_2025_3(feature, value, size, resolution, labelText,
                       labelFont, labelFill, bufferColor, bufferWidth,
                       placement) {
                var valueStr = (value !== null && value !== undefined) ? value.toString() : 'default';
                switch(valueStr) {case 'Eng':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(0,255,4,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 1.3679999999999999}),fill: new ol.style.Fill({color: 'rgba(0,255,4,0.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Sø':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(0,69,206,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 1.3679999999999999}),fill: new ol.style.Fill({color: 'rgba(55,104,202,0.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Mose':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(254,0,0,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 1.3679999999999999}),fill: new ol.style.Fill({color: 'rgba(254,0,0,0.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Overdrev':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(255,229,23,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 1.3679999999999999}),fill: new ol.style.Fill({color: 'rgba(255,229,23,0.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
default:
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(35,35,35,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 1.3679999999999999}),fill: new ol.style.Fill({color: 'rgba(135,164,240,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    }),new ol.style.Style({
        
        fill: fill_3_omrder_2025_3,
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;}};

    var fill_3_omrder_2025_3 = new ol.style.Fill();
var style_3_omrder_2025_3 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    
    var labelText = ""; 
    var value = feature.get("Natyp_navn");
    var labelFont = "20.8px \'Open Sans\', sans-serif";
    var labelFill = "#ffffff";
    var bufferColor = "";
    var bufferWidth = 0;
    var textAlign = "left";
    var offsetX = 0;
    var offsetY = 0;
    var placement = 'point';
    if (feature.get("N360-ID") !== null) {
        labelText = String(feature.get("N360-ID"));
    }
    
    var style = categories_3_omrder_2025_3(feature, value, size, resolution, labelText,
                            labelFont, labelFill, bufferColor,
                            bufferWidth, placement);

    return style;
};

    fill_3_omrder_2025_3.setColor(stripe(0.26, 4.4, 315.0, '#87a4f0'));