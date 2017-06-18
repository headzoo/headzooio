<?php
namespace AppBundle\Entity;

use ApiPlatform\Core\Annotation\ApiResource;
use FOS\UserBundle\Model\User as BaseUser;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ApiResource(
 *  collectionOperations={"get"={"method"="GET"}},
 *  itemOperations={"get"={"method"="GET"}},
 *  attributes={
 *      "normalization_context"={"groups"={"user", "user-read"}},
 *      "denormalization_context"={"groups"={"user", "user-write"}}
 *  }
 * )
 * @ORM\Entity
 * @ORM\Table(name="user")
 */
class User extends BaseUser
{
    /**
     * @ORM\Id
     * @ORM\Column(type="integer")
     * @ORM\GeneratedValue(strategy="AUTO")
     */
    protected $id;

    /**
     * Constructor
     */
    public function __construct()
    {
        parent::__construct();
    }
}