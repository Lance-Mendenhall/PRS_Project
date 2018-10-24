import java.util.ArrayList;
import java.util.List;

public class StreamsDemoApp {

	public static void main(String[] args) {
		List<Integer> grades = new ArrayList<Integer>();
		grades.add(98);
		grades.add(92);
		grades.add(94);
		grades.add(95);
		grades.add(88);
		grades.add(100);
		
		System.out.println("Grades via old school for loop");
		for(int i = 0;i<grades.size(); i++) {
			System.out.println(grades.get(i));
		}

		System.out.println("\nGrades via enhanced for loop");
		for(int i:grades) {
			System.out.println(i);
		}

		System.out.println("\nGrades via stream, double colon operator");
		grades.stream().forEach(System.out::println);

		Person p1 = new Person(1,"Sam","111 Test Way");
		Person p2 = new Person(2,"Sally","222 Main St.");
		Person p3 = new Person(3,"Adam","333 Broadway");
		
		ArrayList<Person> people = new ArrayList<>();
		people.add(p1);
		people.add(p2);
		people.add(p3);
		
		System.out.println("\nPeople via stream, print just the names");
		for(int i = 0;i<people.size();i++) {
			System.out.println(people.get(i));
		}
		System.out.println("\nNormal for loop - just names");
		for(int i = 0;i<people.size();i++) {
			System.out.println(people.get(i).getName());
		}
		
		System.out.println("\nPeople via stream, tostring");
		people.stream().forEach(System.out::println);
		
		System.out.println("\nPeople via stream, print just names - again, with lambda");
		// declaring person as a Person
		people.stream().forEach(person->System.out.println(person.getName()));
		// or - but doesn't print anything
		people.stream().forEach(person->person.getName());
		
		
		
	}

}