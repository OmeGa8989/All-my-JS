public class evenDigits {
    public static void main(String[] args) {
        int[] arr = { 12, 313, 3210, 1, 60, 21, 531 };
        int evenNos = evenD(arr);
        System.out.println("Number of even digits :" + evenNos);
    }

    static int evenD(int[] arr) {
        int num = 0;
        for (int number : arr) {
            if (number < 0)
                number = Math.abs(number);
            // returns the absolute value of number if found-ve

            int digits = (int) (Math.log10(number)) + 1; // counts the number of digits in the number
            if (digits % 2 == 0)
                num++;
        }
        return num;
    }
}
