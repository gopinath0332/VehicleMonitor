/**
 * Class file to create google maps class.
 */
export default class Maps {
    dom = null;
    mapInstance = null;
    mapOptions = {};

    constructor(dom, mapOptions) {
        this.dom = dom;
        this.mapOptions = mapOptions;
    }

    /**
     * Method to create map.
     */
    createMap() {
        try {
            this.mapInstance = new google.maps.Map(this.dom, {
                center : {
                    lat : 13.0347043,
                    lng : 80.208199
                },
                zoom : 7,
                mapTypeId : google.maps.MapTypeId.ROADMAP,
                mapTypeControl: true,
                mapTypeControlOptions: {
                    style: google.maps.MapTypeControlStyle.VERTICAL_BAR,
                    position: google.maps.ControlPosition.TOP_RIGHT
                },
                ...this.mapOptions
            });
        } catch (e) {
            console.error("Error in creating Google Maps ", e);
        }
    }
}