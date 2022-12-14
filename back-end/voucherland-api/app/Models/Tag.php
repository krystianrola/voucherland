<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Collection;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;

class Tag extends Model
{
    use HasFactory;

    protected $table = 'tags';

    /**
     * The attributes that are assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'title',
        'color'
    ];

    /**
     * The attributes that should be cast.
     *
     * @var array<string, string>
     */
    protected $casts = [
        'title' => 'string',
        'color' => 'string'
    ];

    /**
     * The attributes that should be hidden for serialization.
     *
     * @var array<int, string>
     */
    protected $hidden = [
        'created_at',
        'updated_at',
        'laravel_through_key'
    ];


    /**
     *
     *
     * @return Collection
     */
    public function related_articles(): Collection
    {
        return $this->belongsToMany(Article::class)->get();

    }

}
