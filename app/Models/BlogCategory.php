<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class BlogCategory extends Model
{
    use HasFactory;
    protected $fillable = ['name', 'isPub'];
    /**
     * Get all of the blog for the BlogCategory
     *
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     */
    public function blog(): HasMany
    {
        return $this->hasMany(Blog::class, 'blog_id', 'id');
    }
}