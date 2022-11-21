<?php

namespace Database\Seeders;

use App\Models\Blog;
use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        \App\Models\User::factory(3)->create();
        User::create([
            'name' => 'andika',
            'email' => 'andika@gmail.com',
            'username' => 'andika',
            'password' => '12qwaszx'
        ]);
        $this->call([MenuWebsiteSeeder::class, BlogCategorySeeder::class, CustomerSeeder::class]);
        Blog::factory(3)->create();
    }
}