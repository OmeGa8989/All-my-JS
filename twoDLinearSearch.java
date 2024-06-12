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
        String t = target + "";
        if (t.length() % 2 == 0) {
            System.out.println("Its a an even Number");
        }

        int[] result = search(arr, target);
        System.out.println(Arrays.toString(result));
        // System.out.println(result); //garbage value

        System.out.println("Smallest Element in the array:" + minValue(arr));
        System.out.println("Largest Element in the array:" + maxValue(arr));
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

    static int minValue(int[][] arr) {
        int min = arr[0][0];
        for (int row = 0; row < arr.length; row++) {
            for (int column = 0; column < arr[row].length; column++) {
                if (arr[row][column] < min) {
                    min = arr[row][column];
                }
            }
        }
        return min;

    }

    static int maxValue(int[][] arr) {
        int max = Integer.MIN_VALUE;
        for (int row = 0; row < arr.length; row++) {
            for (int column = 0; column < arr[row].length; column++) {
                if (arr[row][column] > max) {
                    max = arr[row][column];
                }
            }
        }
        return max;

    }

}
