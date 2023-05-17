let item_desc = ["Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eius magni quas odit quod error, mollitia cupiditate molestiae nihil vitae quisquam corporis pariatur veritatis omnis quibusdam quaerat. Quam voluptas in laboriosam?", "Deleniti aspernatur numquam culpa! Qui dolores eveniet porro mollitia provident, eligendi, delectus repellendus libero magni et hic est eum officiis expedita consectetur tenetur ducimus repudiandae alias ab. At, eius commodi?", "Expedita deleniti ratione architecto ipsa voluptatibus veritatis assumenda consequatur, nobis saepe pariatur est officiis et omnis quis earum nihil incidunt dolores eum fugiat tempore commodi. Totam at dolorum iure est!", "Quo pariatur sit ipsa temporibus! Quasi, deserunt omnis soluta provident excepturi eaque, porro neque odio, totam quae accusantium cumque eos? Quo adipisci quis impedit ipsum quam, a voluptas. Neque, debitis!", "Omnis ea rerum eaque consectetur necessitatibus, voluptatibus officiis aperiam doloribus nihil magnam optio quia quod consequuntur recusandae non asperiores nemo est? Et numquam labore aut sed quis atque inventore sit?"
];

let infoContainer = $("#infoContainer");
let infoWrapper = $("#infoWrapper");

console.log(infoContainer);
console.log($("#infoWrapper"));

console.log(item_desc[0]);

$(".info-button").on("click", function() {

    console.log("Image Clicked!");
    console.log("Image clicked ID: " + this.id);

    switch(this.id) {
        case ("i1"):
            infoContainer.text(item_desc[0]);
            infoWrapper.removeClass("u-none");
            console.log(item_desc[0]);
        
        case("i2"):
            infoContainer.text(item_desc[1]);
            infoWrapper.removeClass("u-none");
        
        case("i3"):
            infoContainer.text(item_desc[2]);
            infoWrapper.removeClass("u-none");

        case("i4"):
            infoContainer.text(item_desc[3]);
            infoWrapper.removeClass("u-none");
        
        case("i5"):
            infoContainer.text(item_desc[4]);
            infoWrapper.removeClass("u-none");

        case("i6"):
            infoContainer.text(item_desc[5]);
            infoWrapper.removeClass("u-none");
    }
})