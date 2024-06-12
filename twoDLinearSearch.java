import java.util.*;

public class twoDLinearSearch {
    public static void main(String[] args) {

        int[][] arr = new int[][] {
                { 12, 31, 436, 921 },
                { 134, 32, 5, 36, 24 },
                { 1213, 41 },
                { 95, 22, 99, 88 }
        };
        int target = 22;

        int[] result = search(arr, target);
        System.out.println(Arrays.toString(result));
        // System.out.println(result);
    }

    static int[] search(int[][] arr, int target) {
        for (int row = 0; row < arr.length; row++) {
            for (int column = 0; column < arr[row].length; column++) {
                if (arr[row][column] == target) {
                    return new int[] { row, column };
                }
            }
        }
        return new int[] { -1, -1 };
    }
    // new int (new object is written here because the array isn't initialised in
    // this function so
    // we need to declare an object to return the positons)

}
