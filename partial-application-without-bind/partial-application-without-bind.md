## CHỨC NĂNG JAVASCRIPT LÀ TỐT
─────────────────────────────────
 ### Ứng dụng một phần không ràng buộc
 ### Bài tập 9 trên 18

- Ứng dụng một phần cho phép bạn tạo các hàm mới từ các hàm hiện có, đồng thời sửa một số đối số. Sau khi thiết lập các đối số được áp dụng một phần, bạn sẽ có một hàm mới sẵn sàng nhận phần còn lại của các đối số và có thể thực thi hàm ban đầu.

- Chính thức hơn: Ứng dụng một phần đề cập đến quá trình sửa một số đối số cho một hàm, tạo ra một hàm khác có độ hiếm nhỏ hơn.

- Ví dụ: giả sử chúng ta có một hàm thêm, lấy 2 đối số và cộng chúng lại với nhau:

```js
    function (x, y) {
      teturn x + y
    }

    thêm (10, 20) // => 30
```

- Bây giờ, giả sử chúng ta có một hàm một phần Ứng dụng. PartApply nhận một hàm và một số đối số để 'áp dụng một phần'.

- Ở đây chúng tôi 'áp dụng một phần' tham số đầu tiên, x, của hàm add:

```js
    var addTen = partApply (add, 10) // sửa `x` thành 10
```

- addTen là một hàm mới nhận tham số y của add. thêm vẫn chưa được gọi!

 Khi chúng ta truyền đối số cho y, chúng ta có thể thực thi hàm thêm ban đầu:

```js
    addTen (20) // => 30
    addTen (100) // => 110
    addTen (0) // => 10

    // vân vân
```

- Tất cả các ví dụ trên đều giống như cách gọi add (10, y), trong đó y được cung cấp trong lệnh gọi addTen được đặt tên thích hợp.

# Nhiệm vụ

Sử dụng ứng dụng từng phần để tạo một hàm sửa đối số đầu tiên cho console.log. tức là triển khai một chức năng ghi nhật ký thêm một chuỗi không gian tên vào đầu ra của nó.

Việc triển khai của bạn phải lấy một Chuỗi không gian tên và trả về một hàm in thông báo tới bảng điều khiển với không gian tên được thêm vào trước.

Bạn nên sử dụng Hàm # áp dụng để triển khai ứng dụng từng phần.

Đảm bảo rằng tất cả các đối số được truyền cho hàm ghi được trả về đều được in.

 In đầu ra trực tiếp vào bảng điều khiển

## Tranh luận

  * namespace: một Chuỗi để thêm vào trước mỗi thông báo được chuyển đến hàm trả về.

## Thí dụ

```js
var info = logger('INFO:')
    info('this is an info message')
        // THÔNG TIN: đây là một thông báo thông tin


    var warn = logger('WARN:')
    warn('this is a warning message', 'with more info')
    // CẢNH BÁO: đây là thông báo cảnh báo có thêm thông tin
```

## Các điều kiện

  * Không sử dụng chức năng # ràng buộc
  * Sử dụng hàm # áp dụng

## Bản mẫu


    var slice = Array.prototype.slice

    trình ghi hàm (không gian tên) {
      // GIẢI PHÁP ĐI ĐÂY
    }

    module.exports = logger


## Tài nguyên

  * https://en.wikipedia.org/wiki/Partial_application
  * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/apply

## Gợi ý

Hãy nhớ console.log nhận bất kỳ số lượng đối số nào và in chúng, được phân tách bằng dấu cách:

    console.log ('hello', 'world') // => 'hello world'
    console.log (1,2,3) // => 1 2 3


Chúng tôi chỉ muốn 'áp dụng một phần' đối số đầu tiên cho console.log.

Function.prototype.apply cho phép chúng ta thực thi một hàm, cung cấp một 'giá trị mới cho hàm này' (chúng ta có thể bỏ qua trong trường hợp này), và sau đó là một mảng đối số để áp dụng cho hàm:


    thêm (10, 20) // => 30
    add.apply (null, [10, 20]) // => 30


Cũng áp dụng tương phản với Function.prototype.call:


    add.apply (null, [10, 20]) // => 30
    add.call (null, 10, 20) // => 30