## FUNCTIONAL JAVASCRIPT IS GOOD

───────────────────────────────
Basic: Recursion
Exercise 7 of 18

- Đệ quy là một khái niệm lập trình cơ bản có thể dẫn đến các giải pháp thanh lịch và hiệu quả cho các vấn đề thuật toán. Trên thực tế, đệ quy rất mạnh mẽ, tất cả các hành vi lặp có thể được xác định bằng cách sử dụng các hàm đệ quy. Bạn sẽ thấy đệ quy không thể thiếu khi lặp qua các cấu trúc dữ liệu lồng nhau.

- Một hàm đệ quy là một hàm gọi chính nó. Ví dụ, hàm đệ quy này sẽ nhận một mảng các từ và trả về một mảng các từ đó, được viết hoa.

```js
function toUpperArray(items) {
  if (!items.length) return []; // end condition
  var head = items[0]; // item to operate on
  head = head.toUpperCase(); // perform action
  var tail = items.slice(1); // next
  return [head].concat(toUpperArray(tail)); // recursive step
}

toUpperArray(["hello", "world"]); // => ['HELLO', 'WORLD']
```

- Mục đích của bài tập này là làm quen với đệ quy bằng cách triển khai một giao diện quen thuộc sử dụng một hàm đệ quy.

# Task

- Thực hiện Array#reduce bằng cách sử dụng đệ quy.

- Để kiểm tra việc giảm thiểu hoạt động chính xác, chúng tôi sẽ sử dụng triển khai giảm bớt của bạn để thực hiện giải pháp của chúng tôi cho vấn đề basic_reduce trước đó. tức là hàm giảm của bạn sẽ được chuyển qua một mảng các từ, một hàm và một giá trị ban đầu sẽ trả về một đối tượng chứa số lượng cho mỗi từ được tìm thấy trong mảng. Bạn không cần phải triển khai chức năng này, nó sẽ được cung cấp cho quá trình triển khai giảm thiểu của bạn.

- Để đơn giản, việc thực hiện giảm thiểu của bạn không cần phải sao chép hành vi của lệnh giảm thiếu giá trị ban đầu. Bạn có thể cho rằng giá trị ban đầu sẽ luôn được cung cấp.

## Arguments

- arr: Một mảng để giảm bớt
- fn: Hàm dùng làm bước giảm. Giống như Array # Reduce thông thường, hàm này phải được truyền trước đóValue, currentValue, chỉ mục và mảng mà chúng ta đang
  lặp đi lặp lại.
- init: Giá trị ban đầu của mức giảm. Không giống như Array # Reduce, giá trị này là bắt buộc (và bạn có thể cho rằng nó sẽ luôn được cung cấp).

## Example

- Hàm giảm của bạn sẽ hoạt động giống như một
- Mảng thông thường # giảm, nhưng nó sẽ lấy mảng
- Để hoạt động như đối số đầu tiên:

```js
reduce(
  [1, 2, 3],
  function (prev, curr, index, arr) {
    return prev + curr;
  },
  0
);
// => 6
```

## Conditions

- Không sử dụng bất kỳ vòng lặp for / while nào.
- Không sử dụng bất kỳ phương thức Mảng nào như Array#map or Array#reduce.

## Resources

- https://en.wikipedia.org/wiki/Recursion
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce

## Boilerplate

```js
function reduce(arr, fn, initial) {
  // SOLUTION GOES HERE
}

module.exports = reduce;
```
