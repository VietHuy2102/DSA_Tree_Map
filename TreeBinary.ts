import {Node} from "./Node";

export class TreeBinary {
    root: Node | null;

    constructor() {
        this.root = null;
    }

    insertNode(data: number) {
        if (!this.root) { // nếu không có root thì khởi tạo node và gán root bằng node
            let node = new Node(data);
            this.root = node
            return this.root;
        } else {
            let node = new Node(data);
            let currentNode = this.root;

            while (currentNode) {
                if (data < currentNode.data) {// đi xét bên trái tree
                    if (!currentNode.left) { // Nếu currentNode khong co phan tu ben trai thi gan ben trai của curentNode bằng Node cần thêm
                        currentNode.left = node;
                        break;
                    }
                    currentNode = currentNode.left;
                } else if (data > currentNode.data) {
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