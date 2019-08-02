
public class Student implements Comparable<Student>{
    private String name;
    
    public Student(String name){
        this.name = name;
    }
    
    public boolean equals(Student other){
        return other.name == name;
    }
    
    public int compareTo(Student other){
        return name.compareTo(other.name);
    }
    
    public String toString(){
        return "Student's name is " + name;
    }
    
    
}