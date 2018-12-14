20.times do
  d = Department.create(
    name: Faker::Commerce.department,
  )
  10.times do
    i = d.items.create(
      name: Faker::Commerce.product_name,
      price: Faker::Commerce.price,
    )
    10.times do 
      i.reviews.create(
        title: Faker::BreakingBad.episode,
        body: Faker::BackToTheFuture.quote,
        rating: rand(1..5),
        author: Faker::BackToTheFuture.character
      )
    end
  end
end

print `clear`
puts "Data SEEDED"
