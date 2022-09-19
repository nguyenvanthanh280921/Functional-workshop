Cơ bản: Gọi
Bài tập 8 trên 18

JavaScript thực hiện kiểu gõ 'duck'. Kiểu gõ Duck là một kiểu nhập động trong đó các phương thức và thuộc tính của một đối tượng xác định ngữ nghĩa hợp lệ, chứ không phải là sự kế thừa của nó từ một lớp cụ thể hoặc sự triển khai của một đối tượng cụ thể.
giao diện. Tên của khái niệm đề cập đến bài kiểm tra vịt, do James Whitcomb Riley, có thể được diễn giải như sau:

"Khi tôi thấy một con chim đi như vịt, bơi như vịt và bơi như vịt, tôi gọi con chim đó là vịt"

Trong JavaScript, để viết các chương trình mạnh mẽ, đôi khi chúng ta cần kiểm tra một đối tượng có phù hợp với kiểu mà chúng ta cần hay không.

Chúng ta có thể sử dụng Object # hasOwnProperty để phát hiện xem một đối tượng 'có' thuộc tính được xác định trên chính nó (tức là không được kế thừa từ nguyên mẫu của nó) hay không:

    var vịt = {
      quack: function () {
        console.log ('quack')
      }
    }

    duck.hasOwnProperty ('quack') // => true

Chúng tôi đã không cung cấp cho con vịt một phương thức .hasOwnProperty, nó đến từ đâu?

Duck đã được tạo bằng cú pháp {} và do đó nó kế thừa từ Object.prototype:

    var object = {quack: true}

    Object.getPrototypeOf (đối tượng) === Object.prototype // => true
    object.hasOwnProperty ('quack') // => true

Nhưng điều gì sẽ xảy ra nếu một đối tượng không kế thừa từ Object.prototype?

    // tạo một đối tượng với nguyên mẫu 'null'.
    var object = Object.create (null)
    object.quack = function () {
      console.log ('quack')
    }

    Object.getPrototypeOf (đối tượng) === Object.prototype // => false
    Object.getPrototypeOf (object) === null // => true

    object.hasOwnProperty ('quack')
    // => TypeError: Đối tượng đối tượng không có phương thức 'hasOwnProperty'

Tuy nhiên, chúng ta vẫn có thể sử dụng hasOwnProperty từ Object.prototype, nếu chúng ta gọi nó với giá trị này được đặt thành thứ gì đó 'trông giống như một đối tượng'. Lệnh gọi hàm # cho phép chúng ta gọi bất kỳ hàm nào có giá trị này đã thay đổi.

    // đối số đầu tiên để gọi trở thành giá trị của `this`
    // phần còn lại của các đối số được chuyển cho hàm theo

    Object.prototype.hasOwnProperty.call (object, 'quack') // => true

# Nhiệm vụ:

Viết một hàm duckCount trả về số lượng đối số được truyền cho nó có thuộc tính 'quack' được xác định trực tiếp trên chúng. Không khớp với các giá trị được kế thừa từ nguyên mẫu.

Thí dụ:

    var notDuck = Object.create ({quack: true})
    var vịt = {quack: true}
    DuckCount (vịt, notDuck) // 1

## Tranh luận

- Bạn sẽ được chuyển 0-20 đối số. Mỗi đối số có thể thuộc bất kỳ kiểu nào với bất kỳ thuộc tính nào. Một số mặt hàng này sẽ có thuộc tính 'quack'.

## Các điều kiện

- Không sử dụng bất kỳ vòng lặp for / while hoặc Mảng # forEach.
- Không tạo bất kỳ biến bộ đếm / bộ tích lũy nào.
- Không tạo bất kỳ chức năng không cần thiết nào, ví dụ: những người giúp đỡ.

## Dấu

    {
      0: 'đối số0',
      1: 'đối số1', // v.v.
      chiều dài: 2
    }
