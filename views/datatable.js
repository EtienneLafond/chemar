$(document).ready(function () {
    $('#molTable').DataTable({
        scrollY: '500px',
        scrollCollapse: true,
        paging: true});
});

$(document).ready(function () {
    $('#molTable2').DataTable({
        searching: false,
        scrollY: '545px',
        scrollCollapse: true,
        info: false,
        paging: true});
});