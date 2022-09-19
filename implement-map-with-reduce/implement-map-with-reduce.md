CHỨC NĂNG JAVASCRIPT LÀ TỐT
─────────────────────────────────
Triển khai Bản đồ với Rút gọn
Bài tập 11 trên 18

# Nhiệm vụ

Sử dụng Array # Reduce để triển khai một phiên bản đơn giản của bản đồ Array #.

## Đầu ra mong đợi

Một bản đồ hàm áp dụng một hàm cho từng mục trong một mảng và thu thập các kết quả trong một Mảng mới.

    var nums = [1,2,3,4,5]

    // `map` là hàm được xuất của bạn
    var output = map (nums, function double (item) {
      trả lại hàng * 2
    })

    console.log (đầu ra) // => [2,4,6,8,10]

## Tranh luận

- input: một Mảng tùy ý thuộc bất kỳ kiểu nào.
- hoạt động: một Hàm tùy ý có thể được áp dụng cho các mục trong `đầu vào`.

## Gợi ý

- Không cần triển khai đối số `thisArg` tùy chọn của` Array.prototype.map`, điểm thưởng nếu bạn thực hiện!

- https://en.wikipedia.org/wiki/Reduce_(higher-order_ Chức năng)
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce

## Bản mẫu

    module.exports = function arrayMap (arr, fn) {
      // GIẢI PHÁP ĐI ĐÂY
    }
