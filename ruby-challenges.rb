# ASSESSMENT 5: Ruby Coding Practical Questions
# MINASWAN

# --------------------1) Create a method that takes in an array of words and a single letter and returns all the words that contain that particular letter.

# beverages_array = ['coffee', 'tea', 'juice', 'water', 'soda water']
# letter_o = 'o'
# Expected output: ['coffee', 'soda water']
# letter_t = 't'
# Expected output: ['tea', 'water', 'soda water']

#initial pseudo code
# takes in an array and a string of character
#loop through the array
#loop through each string of the array
#filter through the string to find if the character is in the string
#if in the string add the string into a new array
#after looping through the array, output the new array

beverages_array = ['coffee', 'tea', 'juice', 'water', 'soda water']
# new_bev_array = []
letter_o = 'o'
letter_t = 't'

def words_with_letter (array, string)
    new_bev_array = []
    array.each do |word|
      if word.include?(string)
          new_bev_array << word
      end
      end
  return new_bev_array
end
p words_with_letter(beverages_array,letter_o)
p words_with_letter(beverages_array,letter_t)
# 
# -------------------2) Create a method that takes in an array of numbers and returns the sum of the numbers. Use the test variables provided.


#initial pseudo code
#loop to the array
#take each value of the array
#add the value to a new array
#take the next value and add that value to the value of the new array
#continue above action until the last value in the array

nums_array1 = [42, 7, 27]
# Expected output: 76

nums_array2 = [25, 17, 47, 11]
# Expected output: 100
 
def sum_num array
    array.inject(&:+)
end

p sum_num(nums_array1)
p sum_num(nums_array2)

# --------------------3a) Create a class called Bike that is initialized with a model, wheels, and current_speed. The default number of wheels is 2. The current_speed should start at 0. Create a bike_info method that returns a sentence with all the data from the bike object.

# Expected output example: 'The Trek bike has 2 wheels and is going 0 mph.'

class Bike 
    attr_accessor :bike_model, :wheels, :current_speed, 

    def initialize model, wheels, speed
        @bike_model = model 
        @wheels = 2
        @current_speed = 0
    end

    def bike_info
        return "The #{bike_model} bike has #{wheels} wheels and is going #{current_speed} mph."
    end

    def pedal_faster
        speed = speed + 10
    end
    
    def brake
        if speed >= 5
            speed = 0
        else speed = speed - 5
        end
    end
end

trek = Bike.new 'Trek', '2', '0'
p trek.bike_info


# -------------------3b) Add the ability to pedal faster and brake. The pedal_faster method should increase the speed by a given amount. The brake method should decrease the speed by a given amount. The bike cannot go negative speeds.



# Expected output example: my_bike.pedal_faster(10) => 10
# Expected output example: my_bike.pedal_faster(18) => 28
# Expected output example: my_bike.brake(5) => 23
# Expected output example: my_bike.brake(25) => 0
