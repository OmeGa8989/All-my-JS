import java.util.Arrays;

public class bubblesort {
    public static void main(String[] args) {
        int arr[] = { 1, 2, 41, 10, 0, 12 };
        // int sortedArray[] = bubbleSort(arr);
        bubbleSort(arr);
        // print(arr);
        System.out.println(Arrays.toString(arr));
        // Arrays.toString(arr) returns the String proper[1,2,3,4,5] like format of the
        // array you wanna print
    }

    static void bubbleSort(int arr[]) {
        boolean swapped;
        // run the steps n-1 times
        for (int i = 0; i < arr.length - 1; i++) {
            swapped = false; // initally considering no swap is gonna happen so we keep it false
            // for each step , max item will come to last index of the array
            for (int j = 1; j < arr.length - i; j++) {
                // swap if the item is smaller than the previous index
                if (arr[j] < arr[j - 1]) {
                    int temp = arr[j];
                    arr[j] = arr[j - 1];
                    arr[j - 1] = temp;
                    swapped = true; // swapping occurs
                }
                // if no swap happens the boolean variable remains false and so we break out of
                // the loop that means the array is sorted already
            }
            if (!swapped)
                break;
        } // check before entering loop for other element, if not even a single swap
          // occurs for an element it implies that the array is sorted

    }

    // return arr;

    static void print(int arr[]) {
        System.out.print("[");
        for (int i : arr) {
            System.out.print(i + " , ");
        }
        System.out.print("]");
    }
}
