Chức năng gián điệp
Bài tập 12 trên 18

# Nhiệm vụ

Ghi đè một phương thức được chỉ định của một đối tượng có chức năng mới trong khi vẫn duy trì tất cả các hành vi cũ.

Tạo một gián điệp theo dõi số lần một hàm được gọi.

## Thí dụ

     var spy = Spy (console, 'error')

     console.error ('đang gọi console.error')
     console.error ('đang gọi console.error')
     console.error ('đang gọi console.error')

     console.log (spy.count) // 3

## Tranh luận

- target: một đối tượng chứa phương thức `method`
- method: một chuỗi với tên của phương thức trên `target` để theo dõi.

## Các điều kiện

- Không sử dụng bất kỳ vòng lặp for / while hoặc Mảng # forEach.
- Không tạo bất kỳ chức năng không cần thiết nào, ví dụ: những người giúp đỡ.

## Dấu

- Các hàm có ngữ cảnh, đầu vào và đầu ra. Đảm bảo rằng bạn xem xét ngữ cảnh, đầu vào _ và đầu ra từ _ chức năng bạn đang theo dõi.

## Bản mẫu

     function Spy (target, method) {
       // GIẢI PHÁP ĐI ĐÂY
     }

     module.exports = Spy
