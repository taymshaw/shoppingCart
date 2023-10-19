$(document).ready(function() {

    //  add new item
    $('.btn.add').on('click', function (event) {
        var newItemInfo = $('#newItemInfo').val();
        var newItemPrice = $('#newItemPrice').val();
        var newItemQuantity = $(this).closest('tr').find('.quantity input').val();

        $('#addItem').before(`
            <tr>
                <td class="itemName">${newItemInfo}</td>
                <td class="itemPrice">${newItemPrice}</td>
                <td class="quantity"><input type="number" value=${newItemQuantity} /></td>
                <td class="totalCost"></td>
                <td><button class="btn btn-light btn-sm remove">Clear</button></td>
            </tr>`);

            $('#newItemName', '#newItemPrice').val('');
            updateFinalTotal();
    });

    // remove an item
    $('tbody').on('click', '.btn.remove', function () {
        $(this).closest('tr').remove();
    });

        // sub total of each line item
        $('tbody').on('input', '.quantity input', function() {
            var $row = $(this).closest('tr');
            var unitPrice = parseFloat($row.find('.itemPrice').text());
            var quantity = parseFloat($(this).val());

            var totalCost = unitPrice * (isNaN(quantity) ? 0 : quantity);

            $row.find('.totalCost').html(totalCost.toFixed(2));
            updateFinalTotal();
        });

    // display total price
    var updateFinalTotal = function () {
        finalTotal = 0;
        $('.totalCost').each(function() {
            finalTotal += parseFloat($(this).text()) || onabort;
        });
        $('#finalTotal').text(finalTotal.toFixed(2));
    };

    });
