"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TreeBinary = void 0;
const Node_1 = require("./Node");
class TreeBinary {
    constructor() {
        this.root = null;
    }
    insertNode(data) {
        if (!this.root) { // nếu không có root thì khởi tạo node và gán root bằng node
            let node = new Node_1.Node(data);
            this.root = node;
            return this.root;
        }
        else {
            let node = new Node_1.Node(data);
            let currentNode = this.root;
            while (currentNode) {
                if (data < currentNode.data) { // đi xét bên trái tree
                    if (!currentNode.left) { // Nếu currentNode khong co phan tu ben trai thi gan ben trai của curentNode bằng Node cần thêm
                        currentNode.left = node;
                        break;
                    }
                    currentNode = currentNode.left;
                }
                else if (data > currentNode.data) {
                    if (!currentNode.right) {
                        currentNode.right = node;
                        break;
                    }
                    currentNode = currentNode.right;
                }
            }
            return currentNode;
        }
    }
}
exports.TreeBinary = TreeBinary;
//# sourceMappingURL=TreeBinary.js.map