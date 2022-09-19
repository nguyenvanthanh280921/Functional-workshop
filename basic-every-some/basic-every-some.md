## Cơ bản: Mỗi một số

### Bài tập 5 trên 18

# Nhiệm vụ

- Trả về một hàm lấy danh sách người dùng hợp lệ và trả về một hàm trả về true nếu tất cả người dùng được cung cấp tồn tại trong danh sách người dùng ban đầu.

- Bạn chỉ cần kiểm tra xem các id có khớp nhau hay không.

## Thí dụ

```js
var goodUsers = [{ id: 1 }, { id: 2 }, { id: 3 }];

// `checkUsersValid` là hàm bạn sẽ xác định
var testAllValid = checkUsersValid(goodUsers);

testAllValid([{ id: 2 }, { id: 1 }]);
// => true

testAllValid([{ id: 2 }, { id: 4 }, { id: 1 }]);
// => sai
```

## Tranh luận

- goodUsers: danh sách những người dùng hợp lệ

Sử dụng mảng # some và Array # every để kiểm tra mọi người dùng được chuyển đến hàm trả về của bạn có tồn tại trong mảng được truyền cho hàm được xuất hay không.

## Các điều kiện

- Không sử dụng bất kỳ vòng lặp for / while hoặc Mảng # forEach.
- Không tạo bất kỳ chức năng không cần thiết nào v.d. những người giúp đỡ.

## Tài nguyên

- https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Array/every
- https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Array/some

## Bản mẫu

```js
    function checkUsersValid (goodUsers) {
      trả về hàm allUsersValid (submitUsers) {
        // GIẢI PHÁP ĐI ĐÂY
      };
    }

    module.exports = checkUsersValid
```
