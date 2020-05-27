
import java.util.List;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.stream.Collectors; 

public class Main
{
    public static List<Integer> myList = new ArrayList<>();
    
	public static void main(String[] args) {
		combination(6, 4); // Input the c(n, k)
	}
	
	public static void combination(int n, int k){
	    for(int i = 1; i <= n; i++){
	        myList.add(i);
	    }
	    System.out.println("All combination of C(" + n + ", " + k + "):");
	    returnCombination(myList, n, k).stream().forEach(el -> {
	        System.out.print("[");
	        for(int i = 0; i < el.length; i++){
	          System.out.print(el[i] + ((i == el.length-1) ? "" : ", "));
	        }
	        System.out.print("]\n");
	    });
	}
	
	
	public static ArrayList<Integer[]> returnCombination(List<Integer> _myList, int n, int k){
	    ArrayList<Integer[]> answers = new ArrayList<>();
	    if(k == 0){
	        answers.add(new Integer[]{});
	        return answers;
	    }
	    if(n == k){
	        Integer[] answer = new Integer[_myList.size()];
	        for(int i = 0; i < answer.length; i++){
	            answer[i] = _myList.get(i);
	        }
	        answers.add(answer);
	        return answers;
	    }
	    for(int i = 0; i <= n-k ; i++){
	        int firstValue = _myList.get(i);
	        ArrayList<Integer[]> thisAnswers = returnCombination(new ArrayList(_myList.subList(i+1, _myList.size())), n-i-1, k-1);
	        thisAnswers = thisAnswers
                	         .stream()
                	         .map(el -> {
            	                 ArrayList<Integer> myEl = new ArrayList<>(Arrays.asList(el));
            	                 myEl.add(0, firstValue);
            	                 return myEl.toArray(new Integer[myEl.size()]);
                	         })
                	         .collect(Collectors.toCollection(ArrayList::new));
	       answers.addAll(thisAnswers);
	    }
	    return answers;
	}
}
