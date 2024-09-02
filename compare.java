import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

class Person implements Comparable<Person> {
    String name;
    int age;

    Person(String name, int age) {
        this.name = name;
        this.age = age;
    }

    @Override
    public int compareTo(Person other) {
        // Comparison logic based on age
        return Integer.compare(this.age, other.age);
    }

    @Override
    public String toString() {
        return name + " - " + age;
    }
}


public class compare {
    public static void main(String[] args) {
        List<Person> people = new ArrayList<>();
        people.add(new Person("Alice", 30));
        people.add(new Person("Bob", 25));
        people.add(new Person("Charlie", 35));

        // Sorting based on age (natural ordering defined by compareTo)
        Collections.sort(people);

        // Print the sorted list
        for (Person person : people) {
            System.out.println(person);
        }
    }
}
