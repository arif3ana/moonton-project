<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Movie;
class MovieTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $movies = [
            [
                'name' => 'The Shawpshank Redemption',
                'slug' => 'the-shawshank-redemption',
                'category' => 'Drama',
                'video_url' => "https://www.youtube.com/watch?v=iiw9Z1I1AcE",
                'thumbnail' => "https://unsplash.com/photos/4zv4ToBIJs0",
                'rating' => 4.3,
                'is_featured' => 1,
            ],

            [
                'name' => 'The Godfather',
                'slug' => 'the-godfather',
                'category' => 'Drama',
                'video_url' => "https://www.youtube.com/watch?v=NFMmSOWPj_k",
                'thumbnail' => "https://unsplash.com/photos/L_1jns4QHf0",
                'rating' => 4.2,
                'is_featured' => 0,
            ],

            [
                'name' => 'The Godfather: Part II',
                'slug' => 'the-godfather-part-ii',
                'category' => 'Drama',
                'video_url' => "https://www.youtube.com/watch?v=fwzRR6Bsro4",
                'thumbnail' => "https://unsplash.com/photos/41jCcVG2ezo",
                'rating' => 4.1,
                'is_featured' => 0,
            ],
            
        ];

        Movie::insert($movies);
    }
}
