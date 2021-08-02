$("#min-max-zoom").on("click", function(e) {
    e.preventDefault();
    if (map.getOptions("minZoom") === 10) {
        map.setOptions({
            minZoom: 16,
            maxZoom: 21
        });
        $(this).val(this.name + ': 16 ~ 21');
    }
});