var ol = require('openlayers');
var styles = require('./styleDefinitions');
var proj = require('./projections');

var layerDefinitions = [
    {
        id: 'path_corner',
        name: 'Lanes',
        filename: 'path_corner.json',
        type: 'GeoJSON',
        group: 'overlay',
        projection: proj.dota,
        style: styles.teamColor
    },
    {
        id: 'npc_dota_spawner',
        name: 'Lane Spawns',
        filename: 'npc_dota_spawner.json',
        type: 'GeoJSON',
        group: 'overlay',
        projection: proj.dota,
        style: styles.creepSpawn
    },
    {
        id: 'ent_fow_blocker_node',
        name: 'Vision Blocker',
        filename: 'ent_fow_blocker_node2.json',
        type: 'GeoJSON',
        group: 'overlay',
        style: new ol.style.Style({
            fill: new ol.style.Fill({color: [0, 0, 255, 0.3]}),
            stroke: new ol.style.Stroke({color: [0, 0, 255, 0.8]})
        })
    },
    {
        id: 'no_wards',
        name: 'Invalid Wards',
        filename: 'no_wards2.json',
        type: 'GeoJSON',
        group: 'overlay',
        style: new ol.style.Style({
            fill: new ol.style.Fill({color: [255, 0, 0, 0.3]}),
            stroke: new ol.style.Stroke({color: [255, 0, 0, 0.8]})
        })
    },
    {
        id: 'trigger_multiple',
        name: 'Spawn Boxes',
        type: 'polygon',
        group: 'overlay',
        style: new ol.style.Style({
            fill: new ol.style.Fill({color: [0, 255, 125, 0.3]}),
            stroke: new ol.style.Stroke({color: [0, 255, 125, 0.8]})
        })
    },
    {
        id: 'npc_dota_neutral_spawner',
        name: 'Neutral Camps',
        group: 'object',
        style: function (feature, resolution) {
            return styles.neutralCamp[parseInt(feature.get('dotaProps').neutralType)]
        }
    },
    {
        id: 'ent_dota_tree',
        name: 'Trees',
        group: 'object',
        style:  function (feature, resolution) {
            if (feature.get('isCut')) {
                return styles.tree.dead;
            }
            else {
                return styles.tree.alive;
            }
        },
        toggle: true
    },
    {
        id: 'npc_dota_roshan_spawner',
        name: 'Roshan',
        group: 'object',
        style: styles.roshan
    },
    {
        id: 'dota_item_rune_spawner_powerup',
        name: 'Runes',
        group: 'object',
        style: styles.rune
    },
    {
        id: 'dota_item_rune_spawner_bounty',
        name: 'Bounty Runes',
        group: 'object',
        style: styles.bountyRune
    },
    {
        id: 'ent_dota_fountain',
        name: 'Fountain',
        group: 'structure',
        style: styles.ent_dota_fountain,
        toggle: true
    },
    {
        id: 'npc_dota_barracks',
        name: 'Barracks',
        group: 'structure',
        style: styles.npc_dota_barracks,
        toggle: true
    },
    {
        id: 'npc_dota_filler',
        name: 'Buildings',
        group: 'structure',
        style: styles.npc_dota_filler,
        toggle: true
    },
    {
        id: 'npc_dota_tower',
        name: 'Towers',
        group: 'structure',
        style: styles.npc_dota_tower,
        toggle: true
    },
    {
        id: 'ent_dota_shop',
        name: 'Shops',
        group: 'structure',
        style: styles.ent_dota_shop
    },
    {
        id: 'npc_dota_fort',
        name: 'Ancients',
        group: 'structure',
        style: styles.npc_dota_fort,
        toggle: true
    },
    {
        id: 'npc_dota_healer',
        name: 'Shrines',
        group: 'structure',
        style: styles.npc_dota_healer,
        toggle: true
    },
    {
        id: 'pullRange',
        name: 'Pull Range',
        type: 'pullRange',
        group: 'overlay',
        style: styles.pullRange,
        visible: true
    }
];

module.exports = layerDefinitions;