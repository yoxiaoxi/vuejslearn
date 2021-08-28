const app = new Vue({
    el: '#app',
    data: {
        books: [
            {name: '算法导论', data: '2006-09', price: 85.3, num: 2},
            {name: 'linux', data: '2016-09', price: 33, num: 1},
            {name: 'java', data: '2002-09', price: 178, num: 1},
            {name: 'golang', data: '2013-09', price: 198, num: 2}
        ]
    },
    methods: {
        removeBook(index) {
            this.books.splice(index, 1)
        },
        subtractNum(index) {
            if (this.books[index].num > 1) {
                this.books[index].num--
            }

        },
        addNum(index) {
            this.books[index].num++
        }
    },
    computed: {
        countPrice() {
            let count = 0
            for (let book of this.books) {
                count += book.price * book.num
            }
            return count
        }
    },
    filters: {
        showPrice(price) {
            return '¥' + price.toFixed(2)
        },
        showBookName(name) {
            return '《' + name + '》'
        }
    }
})