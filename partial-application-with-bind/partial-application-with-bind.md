CHỨC NĂNG JAVASCRIPT LÀ TỐT
─────────────────────────────────
 Đơn đăng ký một phần có ràng buộc
 Bài tập 10 trên 18


# Nhiệm vụ

Sử dụng chức năng # ràng buộc để triển khai một chức năng ghi nhật ký cho phép bạn thông báo không gian tên.

Việc triển khai của bạn phải lấy một chuỗi không gian tên và trả về một hàm in thông báo tới bảng điều khiển với không gian tên được thêm vào trước.

Đảm bảo rằng tất cả các đối số được truyền cho hàm ghi được trả về đều được in.

 In đầu ra trực tiếp vào bảng điều khiển

## Tranh luận

  * namespace: một Chuỗi để thêm vào trước mỗi thông báo được chuyển đến hàm trả về.

## Thí dụ


    var info = logger ('THÔNG TIN:')
    thông tin ('đây là một thông báo thông tin')
    // THÔNG TIN: đây là một thông báo thông tin

    var warning = logger ('WARN:')
    cảnh báo ('đây là một thông báo cảnh báo', 'với nhiều thông tin hơn')
    // CẢNH BÁO: đây là thông báo cảnh báo có thêm thông tin


## Các điều kiện

  * Sử dụng hàm # bind

## Bản mẫu


    module.exports = function (không gian tên) {
      // GIẢI PHÁP ĐI ĐÂY
    }


## Tài nguyên

  * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/bind