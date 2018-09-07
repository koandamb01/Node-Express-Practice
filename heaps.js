function Heap() {
    this.heap = [undefined];
}

Heap.prototype.addToheap = function (val) {
    // check for zero case
    if (this.heap.length == 0) {
        this.heap.push("undefined");
        this.heap.push(val);
        // return heap;
    } else {
        // push the new val to our heap
        this.heap.push(val);
        // get the child and parent index
        c = this.heap.length - 1;
        p = Math.trunc(c / 2);

        // loop the heap until all parent value less than their child's values
        // and loop until we at index 1
        while (p >= 1 && this.heap[p] > this.heap[c]) {
            // child and parent values
            let temp = this.heap[c];
            this.heap[c] = this.heap[p];
            this.heap[p] = temp;

            // get the parent new index
            c = p;
            p = Math.trunc(c / 2);
        }
    }
    // return heap;
}


Heap.prototype.removeMin = function () {
    var min;
    // check if heap has 1 or 2 elements
    if (this.heap.length == 1) {
        console.log("No More elements in this Head");
    } else if (this.heap.length == 2) {
        min = this.heap.pop();
        return min;
    }
    else {
        let temp = this.heap[this.heap.length - 1];
        this.heap[this.heap.length - 1] = this.heap[1];
        this.heap[1] = temp;

        min = this.heap.pop();

        // get the index of parent and children
        var p = 1;
        var c1 = 2;
        var c2 = 3

        while (((this.heap[c1] != undefined && this.heap[c2] == undefined) && (this.heap[p] > this.heap[c1])) || ((this.heap[c1] != undefined && this.heap[c2] != undefined) && (this.heap[p] > this.heap[c1] || this.heap[p] > this.heap[c2]))) {

            if (this.heap[c2] != undefined) {

                if (this.heap[c1] < this.heap[c2]) {
                    let temp = this.heap[p];
                    this.heap[p] = this.heap[c1];
                    this.heap[c1] = temp;
                    p = c1;
                } else {
                    let temp = this.heap[p];
                    this.heap[p] = this.heap[c2];
                    this.heap[c2] = temp;
                    p = c2
                }
            }
            else {
                let temp = this.heap[p];
                this.heap[p] = this.heap[c1];
                this.heap[c1] = temp;
                p = c1;
            }

            // 
            c1 = p * 2;
            c2 = c1 + 1;
        }
    }
    return min;
}


const h1 = new Heap();
console.log("heap: ", h1);
console.log("");

h1.addToheap(26);
h1.addToheap(7);
h1.addToheap(9);
h1.addToheap(12);
h1.addToheap(20);

console.log("heap with 5 len: ", h1);
console.log("");

// h1.addToheap(2);
var min = h1.removeMin();

console.log("min: ", min);
console.log("");

console.log("heap after remove: ", h1);