<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasOne;

class Blog extends Model
{
    use HasFactory;
    protected $fillable = ['name', 'description', 'isPub', 'category_id', 'user_id'];
    /**
     * Get the user associated with the Blog
     *
     * @return \Illuminate\Database\Eloquent\Relations\HasOne
     */
    public function user(): HasOne
    {
        return $this->hasOne(User::class, 'id', 'user_id');
    }
    /**
     * Get the blogCategory associated with the Blog
     *
     * @return \Illuminate\Database\Eloquent\Relations\HasOne
     */
    public function blogCategory(): HasOne
    {
        return $this->hasOne(BlogCategory::class, 'id', 'category_id');
    }
}