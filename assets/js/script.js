/**
 * Created by Parsa on 10/13/2018.
 */
$('#images').change(function () {
    var file_list = this.files;
    $('#container').empty();
    for(var i=0;i<file_list.length;i++){
        var file_reader = new FileReader();
        file_reader.readAsDataURL(file_list[i]);
        file_reader.onload = function (element) {
            var image_str = "<img class='image-preview' src='"+element.target.result+"'>";
            $('#container').append(image_str);
        }
    }
})