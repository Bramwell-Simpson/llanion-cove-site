let item_desc = ["ITEM 1 - Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eius magni quas odit quod error, mollitia cupiditate molestiae nihil vitae quisquam corporis pariatur veritatis omnis quibusdam quaerat. Quam voluptas in laboriosam?", "ITEM 2 - Deleniti aspernatur numquam culpa! Qui dolores eveniet porro mollitia provident, eligendi, delectus repellendus libero magni et hic est eum officiis expedita consectetur tenetur ducimus repudiandae alias ab. At, eius commodi?", "ITEM 3 - Expedita deleniti ratione architecto ipsa voluptatibus veritatis assumenda consequatur, nobis saepe pariatur est officiis et omnis quis earum nihil incidunt dolores eum fugiat tempore commodi. Totam at dolorum iure est!", "ITEM 4 - Quo pariatur sit ipsa temporibus! Quasi, deserunt omnis soluta provident excepturi eaque, porro neque odio, totam quae accusantium cumque eos? Quo adipisci quis impedit ipsum quam, a voluptas. Neque, debitis!", "ITEM 5 - Omnis ea rerum eaque consectetur necessitatibus, voluptatibus officiis aperiam doloribus nihil magnam optio quia quod consequuntur recusandae non asperiores nemo est? Et numquam labore aut sed quis atque inventore sit?", "ITEM 6 - Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur neque ducimus quaerat perferendis architecto quae nemo officiis nesciunt, necessitatibus repellat id recusandae commodi accusamus, quas quia doloribus fuga, est error."
];

let infoContainer = $("#infoContainer");
let infoWrapper = $("#infoWrapper");

console.log(infoContainer);
console.log($("#infoWrapper"));

console.log($("#i5"));

console.log(item_desc[0]);
console.log(item_desc.length);
console.log(item_desc[item_desc.length - 1]);

$(".info-button").on("click", function() {

    console.log("Image Clicked!");
    console.log("Image clicked ID: " + this.id);

    switch(this.id) {
        case ("i1"):
            infoContainer.text(item_desc[0]);
            infoWrapper.removeClass("u-none");
            
            break;
        
        case ("i2"):
            infoContainer.text(item_desc[1]);
            infoWrapper.removeClass("u-none");

            break;
        
        case ("i3"):
            infoContainer.text(item_desc[2]);
            infoWrapper.removeClass("u-none");

            break;

        case ("i4"):
            infoContainer.text(item_desc[3]);
            infoWrapper.removeClass("u-none");

            break;
        
        case ("i5"):
            infoContainer.text(item_desc[4]);
            infoWrapper.removeClass("u-none");

            break;

        case ("i6"):
            infoContainer.text(item_desc[5]);
            infoWrapper.removeClass("u-none");

            break;

        default:
            break;

    };
})