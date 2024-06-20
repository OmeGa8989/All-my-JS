
import java.util.Arrays;

class selectionSort {
    static boolean swapped = false;

    // In selection sort what we do is find the largest element in the array , put
    // it in the last postion , then decrease the loopable length of the array by 1,
    // this way we loop till n-1-i positions and by every last element the array
    // gets sorted
    public static void main(String[] args) {
        int arr[] = { 1, 20, 3, 100, -1, 31 };
        // int ar2[] = { 1, 2, 3, 4, 5 };
        for (int i = 0; i < arr.length; i++) {
            int last = arr.length - 1 - i; // the length of the array decreases by 1 because the last element gets
                                           // sorted after every loop.
            int maxIndex = getMaxIndex(arr, 0, last);
            swap(arr, maxIndex, last);
            if (!swapped) {
                break;
            }
        }
        System.out.println(Arrays.toString(ar2));

    }

    static int getMaxIndex(int arr[], int start, int end) {
        boolean swapped = false;
        int max = 0;
        for (int i = start; i < end; i++) {
            if (arr[max] < arr[i]) {
                max = i;
                swapped = true;
            } // find the index of the current largest element of the array.

        }
        return max;
    }

    static void swap(int arr[], int index1, int index2) {

        int temp = arr[index1];
        arr[index1] = arr[index2];
        arr[index2] = temp;
        // swapped = true;
    }

}
