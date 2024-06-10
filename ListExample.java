import java.util.ArrayList;
import java.lang.reflect.Array;
import java.util.Scanner;

import javax.sound.sampled.SourceDataLine;

public class ListExample {
    public static void main(String[] args) {

        Scanner sc = new Scanner(System.in);

        ArrayList<Integer> list = new ArrayList<>(10);
        list.add(10);
        list.add(42);
        list.add(40);
        list.add(30);
        list.add(50);

        System.out.println(list);

        list.add(324);
        System.out.println(list);

        boolean ans = list.contains(10);
        System.out.println(ans);

        list.set(0, 100);
        System.out.println(list);

        list.remove(0);
        System.out.println(list);

        for (int i = 0; i < 5; i++) {
            System.out.print(list.get(i)); // to print each item of the list use
            // list.get(index)
            // // list[index] like array won't work here
        }

        // multi-d arraylist
        ArrayList<ArrayList<Integer>> list2 = new ArrayList<>(10);

        // // initalisation
        for (int i = 0; i < 3; i++) {
            list2.add(new ArrayList<>());
        }

        // input
        for (int i = 0; i < 3; i++) {
            for (int j = 0; j < 5; j++) {
                list2.get(i).add(sc.nextInt());

            }
        }
        System.out.println(list2);

        // toString() pre-defined method that converts all the contents of an array to
        // String non-primitive datatype
        int arr[] = { 12, 14, 4234, 23423, 243 };
        System.out.println(Arrays.toString((arr)));

    }
}
